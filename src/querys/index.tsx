import { gql } from '@apollo/client';

const TEMPERATURE = gql`
  query getTemperature($name: String!) {
    getCityByName(name: $name) {
      weather {
        temperature {
          actual
        }
      }
    }
  }
`;

export default TEMPERATURE;
