// First method
// type IconSize = "sm" | "xs" | Omit<string, "sm" | "xs">;
//2nd method
type IconSize = LooseAutoComplete<"sm" | "xs"> ;

type LooseAutoComplete<T extends string>= T| Omit<string, T>
interface IconProps {
  size: IconSize;
}

export const Icon = ({ size }: IconProps) => {
  return (
    <div style={{ textAlign: "center" }}>
      <p>{size}</p>
    </div>
  );
};

const AutoComplete = () => {
  return <Icon size="sm" />;
};

export default AutoComplete;
