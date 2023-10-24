import type {
  NullableSchema,
  NullishSchema,
  OptionalSchema,
} from '../../schemas/index.ts';

/**
 * Returns the default value of the schema.
 *
 * @param schema The schema to get the default value from.
 *
 * @returns The default value.
 */
export function getDefault<
  TSchema extends
    | OptionalSchema<any, any>
    | NullableSchema<any, any>
    | NullishSchema<any, any>
>(schema: TSchema): ReturnType<TSchema['getDefault']> {
  return schema.getDefault();
}