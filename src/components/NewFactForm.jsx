import { useState } from "react";
import supabase from "../data/supabase";
import { CATEGORIES } from "../data/categories";

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    // [x] 1. Prevent the browser to relod
    e.preventDefault();

    // [x] 2. Check if data is valid. If so create a new fact
    if (text && isValidHttpUrl(source) && category && text.length <= 200) {
      // [x] 3. Create a new factObj
      // const newFact = {
      //   id: Math.round(Math.random() * 10000000),
      //   text,
      //   source,
      //   category,
      //   votesInteresting: 0,
      //   votesMindblowing: 0,
      //   votesFalse: 0,
      //   createdIn: new Date().getFullYear(),
      // };

      // [x] 3. Upload fact to Supabase and recive the new fact object
      console.log(isUploading);
      setIsUploading(true);
      const { data: newFact, error } = await supabase
        .from("facts")
        .insert({ text, source, category })
        .select();
      setIsUploading(false);

      // [x] 4. Add the fact to the UI (update the state)
      if (!error) setFacts((facts) => [...facts, newFact[0]]);

      // [x] 5. Resest the input fields
      setText("");
      setSource("");
      setCategory("");

      // [x] 6. Close the form
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit} disabled={isUploading}>
      <input
        type="text"
        placeholder="Share a fact with the world..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span>{200 - text.length}</span>
      <input
        type="text"
        placeholder="Trustworthy source..."
        value={source}
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose category:</option>
        {CATEGORIES.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
