"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function login(formData: FormData) {

    const supabase = await createClient();

    const rawEmail = formData.get("email");
    const rawPassword = formData.get("password");

    // basic type checking
    if (typeof rawEmail !== "string" || typeof rawPassword !== "string") {
        console.error("Invalid form input: email or password not strings");
        redirect(`/error?message=Invalid credentials`)
    }

    const email = rawEmail.trim().toLowerCase();
    const password = rawPassword.trim();

    if (!email.includes("@") || password.length < 6 ) {
        console.error("Validation failed: invalid email or password");
        redirect(`/error?message=Invalid credentials`)
    }

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        console.error("Supabase auth error: ", error.message);
        redirect(`/error?message=Invalid credentials`)
    }

    revalidatePath("/", "layout");
    redirect("/error?message=Invalid credentials");
}

export async function signup(
	prevState: { errors?: Partial<Record<string, string>> } | null,
	formData: FormData
  ): Promise<{ errors?: Partial<Record<string, string>> } | null> {
	const supabase = await createClient();
  
	const rawFirstName = formData.get("firstName");
	const rawLastName = formData.get("lastName");
	const rawEmail = formData.get("email");
	const rawPassword = formData.get("password");
  
	// Basic type check
	if (
	  typeof rawFirstName !== "string" ||
	  typeof rawLastName !== "string" ||
	  typeof rawEmail !== "string" ||
	  typeof rawPassword !== "string"
	) {
	  return {
		errors: {
		  global: "Invalid input types. Please fill out all fields correctly.",
		},
	  };
	}
  
	const firstName = rawFirstName.trim();
	const lastName = rawLastName.trim();
	const email = rawEmail.trim().toLowerCase();
	const password = rawPassword.trim();
  
	const errors: Record<string, string> = {};
  
	if (firstName.length < 1) {
	  errors.firstName = "First name is required.";
	}
  
	if (lastName.length < 1) {
	  errors.lastName = "Last name is required.";
	}
  
	if (!email.includes("@")) {
	  errors.email = "Please enter a valid email address.";
	}
  
	if (password.length < 6) {
	  errors.password = "Password must be at least 6 characters.";
	}
  
	if (Object.keys(errors).length > 0) {
	  return { errors };
	}
  
	const { error } = await supabase.auth.signUp({
	  email,
	  password,
	  options: {
		data: {
		  full_name: `${firstName} ${lastName}`,
		  email,
		},
	  },
	});
  
	if (error) {
	  console.error("Supabase signup error:", error.message);
	  return {
		errors: {
		  global: error.message || "Failed to sign up. Please try again.",
		},
	  };
	}
  
	// revalidatePath("/", "layout");
	// redirect("/");
	return null;
  }
  

export async function signout() {

    const supabase = await createClient();
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.log(error);
        redirect(`/error?message=Invalid credentials`)
    }

    redirect("/logout");
}

export async function signInWithGoogle() {

    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
        queryParams: {
        access_type: "offline",
        prompt: "consent",
        },
    },
    });

    if (error) {
        console.log(error);
        redirect(`/error?message=Invalid credentials`)
    }

    redirect(data.url);
}
