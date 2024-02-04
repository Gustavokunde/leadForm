// import { Container } from './styles';

const LeadForm = () => {
  return (
    <form>
      <label>Name:</label>
      <input type="text" id="name" name="name" required />

      <label>Email:</label>
      <input type="email" id="email" name="email" required />

      <label>Phone:</label>
      <input type="tel" id="phone" name="phone" required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LeadForm;
