import { supabaseClientServer } from "@/utils/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const next = url.searchParams.get("next") ?? "/profile";

    if (!code) {
        return NextResponse.redirect(new URL("/error?message=Missing code", request.url));
    }

    const supabase = await supabaseClientServer();

    // set cookies (exchange code for seassion)
    const { error: sessionError } = await supabase.auth.exchangeCodeForSession(code);
    
    if (sessionError) {
        console.error("Session exchange error: ", sessionError.message);
        return NextResponse.redirect(new URL("/error?message=Session error", request.url));
    }

    // if no error (session is available), get user
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        const { data: profile } = await supabase
        .from("profiles")
        .select("avatar_url")
        .eq("id", user.id)
        .single();

        const avatar = user.user_metadata.avatar_url; // user_metadata from Google

        if (!profile?.avatar_url && avatar) {
            await supabase
            .from("profiles")
            .update({ avatar_url: avatar })
            .eq("id", user.id);
        }
    }

    return NextResponse.redirect(new URL(next, request.url));
}