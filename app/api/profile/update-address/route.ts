import { supabaseClientServer } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const supabase = await supabaseClientServer();
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const body = await req.json();
    const { address_line_1, address_line_2, city, state, zipcode, country } = body;

    const { error: upsertError } = await supabase
      .from("shipping_address")
      .upsert(
        {
          user_id: user.id,
          address_line_1,
          address_line_2,
          city,
          state,
          zipcode,
          country,
        },
        { onConflict: "user_id" }
      );

    if (upsertError) {
      return NextResponse.json(
        { error: "Failed to save shipping address." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Shipping address upsert error:", error);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}




// import { supabaseClientServer } from "@/utils/supabase/server";
// import { NextResponse } from "next/server";


// export async function POST(req: Request) {
//     try {
//         const supabase = await supabaseClientServer();
//         const { data: { user }, error: userError } = await supabase.auth.getUser();

//         if (userError || !user) {
//             return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
//         }

//         const body = await req.json();
//         const { address_line_1, address_line_2, city, state, zipcode, country } = body;

//         const { error: updateError } = await supabase
//             .from("shipping_address")
//             .update({ address_line_1, address_line_2, city, state, zipcode, country })
//             .eq("user_id", user.id);

//         if (updateError) {
//             return NextResponse.json(
//                 { error: "Failed to update profile." },
//                 { status: 500 }
//             );
//         }

//         return NextResponse.json({ success: true });
//     } catch (error) {
//         console.error("Profile update error: ", error);
//         return NextResponse.json({ error: "Server error." }, { status: 500 });
//     }
// }



