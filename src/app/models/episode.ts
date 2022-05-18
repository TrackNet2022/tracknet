/**
 * Representación de la estructura de datos que sigue un cápitulo devuelto por nuestra API
 */
export interface Episode {
  air_date: string
  episode_number: number
  id: number
  name: string
  overview: string
  production_code: string
  season_number: number
  show_id: number
  still_path: string | null
  vote_average: number
  vote_count: number
}
