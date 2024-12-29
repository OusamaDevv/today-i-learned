import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rrpgufsggsrkorjzmgmz.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJycGd1ZnNnZ3Nya29yanptZ216Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzODk4MzEsImV4cCI6MjA1MDk2NTgzMX0._YyiL9yiTEWHHY2qrPVPeaxl5deGkQhDO3PKSOgBzdY";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
