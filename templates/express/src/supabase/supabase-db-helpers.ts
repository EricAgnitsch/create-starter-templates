import { Database } from './database.types';
import { supabase } from './supabase-client';

type TableName = keyof Database['public']['Tables'];
export type TableInsert<T extends TableName> =
  Database['public']['Tables'][T]['Insert'];

export const supabaseInsertOne = <T>(tableName: TableName, values: T) => {
  return supabase.from(tableName).insert<T>(values).select().single();
};

export const supabaseInsertMany = <T>(tableName: TableName, values: T[]) => {
  return supabase.from(tableName).insert<T>(values);
};
