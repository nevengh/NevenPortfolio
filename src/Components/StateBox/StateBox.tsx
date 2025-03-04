import "./StateBox.css";
interface StateBoxProps{
    number:string;
    title:string;
}
const StateBox:React.FC<StateBoxProps> = ({number,title}) => {
  return (
    <div className="StateBox">
      <h1>{number}</h1>
      <h3 className="stats_title">{title}</h3>
    </div>
  );
};

export default StateBox;
