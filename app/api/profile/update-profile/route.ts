import { supabaseClientServer } from "@/utils/supabase/server"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const supabase = await supabaseClientServer();
        const { data: { user }, error: userError } = await supabase.auth.getUser();

        if (userError || !user) {
            return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
        }

        const body = await req.json();
        const { full_name, birth_date, gender } = body;

        const { error: updateError } = await supabase
            .from("profiles")
            .update({ full_name, birth_date, gender })
            .eq("id", user.id);

        if (updateError) {
            return NextResponse.json(
                { error: "Failed to update profile." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });

    } catch (error) {
       console.error("Profile update error: ", error);
       return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}