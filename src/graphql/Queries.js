import { gql } from "@apollo/client";

export const LOAD_POKEMON_LIST = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      nextOffset
      prevOffset
      status
      message
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export const LOAD_POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      height
      abilities {
        ability {
          name
        }
      }
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
        effort
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;

export const LOAD_POKEMON_ABILITIES = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      weight
      abilities {
        is_hidden
        ability {
          id
          name
          url
        }
      }
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
