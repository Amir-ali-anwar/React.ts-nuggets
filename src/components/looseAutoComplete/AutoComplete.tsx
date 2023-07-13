type IconSize = "sm" | "xs" | Omit<string, "sm" | "xs">;
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
