import { createClient } from '@supabase/supabase-js'

const URL = 'https://ggrgaesjnmsetaqlwukg.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdncmdhZXNqbm1zZXRhcWx3dWtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NTQ5MzgsImV4cCI6MjAyODUzMDkzOH0.9u_di4gevm8DuRuHGF_IdQ26OXDX_KAZ34XC5iYEk0g';

export const supabase = createClient(URL, API_KEY);
