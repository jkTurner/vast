
import { supabaseClientServer } from "@/utils/supabase/server";

export async function getUserServer() {
    const supabase = await supabaseClientServer();
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}