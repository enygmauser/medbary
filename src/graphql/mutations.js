export const CREATE_APPOINTMENT = `
  mutation CreateContact(
    $name: String!, 
    $email: String!, 
    $phone: String!,
    $dept: String!,
    $message: String!
  ) {
    createContact(
      name: $name, 
      email: $email, 
      phone: $phone,
      dept: $dept,
      message: $message
    ) {
      id
      name
      email
      phone
      dept
      message
    }
  }
`;
