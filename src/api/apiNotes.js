import { supabase } from "./supabase";

// CREATE notes
export async function createNote({ title, content, verse, user_id }) {
  console.log(title, content, verse);
  const { data, error } = await supabase.from("notes").insert({
    title: title,
    note: content,
    verse,
    user_id
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

// READ notes
export async function getNotes(verses, user) {

  
  const { data, error } = await supabase
    .from("notes")
    .select("*")
    .eq("verse", verses).eq('user_id', user.user.id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return data;
}

// UPDATE notes

// DELETE notes
export async function deleteNote(id) {
    console.log(id);

  const { data, error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }

  return data;
}
