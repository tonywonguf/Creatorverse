import { createClient } from '@supabase/supabase-js';

const URL = 'https://snrtrznsvepvwwcdlceu.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNucnRyem5zdmVwdnd3Y2RsY2V1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzODI2NDgsImV4cCI6MjAwNzk1ODY0OH0.jCPklw7q1z5UQ2ms51hLYzBhmKzqpSRWof69wkZV2vY';
export const supabase = createClient(URL, API_KEY);