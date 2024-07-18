/* exported getDescriptionOfPerson */

interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

const getDescriptionOfPerson: any = (person: Person): string => {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
};
