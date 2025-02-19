import { supabase } from "./supabase";

export async function signUpUser({ email, password, username }) {
  // validating if username is taken
  const { data: existingUser } = await supabase
    .from("profiles")
    .select("username,email")
    .or(`username.eq.${username},email.eq.${email}`)
    .maybeSingle();

  if (existingUser) {
    throw new Error(
      "Username or email is already taken. Please choose another one."
    );
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
      },
    },
  });


  if (error) {
    console.log(error);
    throw new Error(error);
  }

  // const { error: profileError } = await supabase
  //   .from("profiles")
  //   .insert([{ id: data.user.id, email }]);

  // if (profileError) {
  //   throw new Error("User created but failed to store profile data.");
  // }

  // console.log(data.user.user_metadata.username);

  return data;
}

export async function loginUser({ email, username, password }) {
  if(!email && username){
    const { data, error } = await supabase.from("profiles").select("email").eq("username", username).maybeSingle();
    console.log(data, error);
    if (error || !data) {
      throw new Error("Username not found");
    }
      email = data.email

  }

  const { data, error } = await supabase.auth.signInWithPassword({ email, password }); 
  if(!password) {
    throw new Error("Password is required");
  }
  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function logoutUser() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}

export async function getUser(){
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return data;
}