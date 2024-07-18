/* exported getInitialsOfPerson */

interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  const firstInitial: string = person.firstName.charAt(0);
  const lastInitial: string = person.lastName.charAt(0);
  return `${firstInitial}${lastInitial}`;
}
