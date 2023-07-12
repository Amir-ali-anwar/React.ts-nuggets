type Props = {
  name: string;
} & (MaleProps | FemaleProps);
type MaleProps = {
  gender: "male";
  salary: number;
};
type FemaleProps = {
  gender: "female";
  weight: number;
};
const Child = ({ name }: Props) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Child;

// In this component we are looking how we can conditionally pass the props
