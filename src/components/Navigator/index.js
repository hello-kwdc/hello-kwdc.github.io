import * as SC from "@/components/styles";
import IconArrowRight from "@/resources/icons/arrowRight.svg";
const Navigator = ({ handleButtonClick }) => {
  return (
    <SC.Navigator>
      <SC.NavLogo>KWDC23</SC.NavLogo>
      <SC.NavButton onClick={handleButtonClick}>
        <span>Get Ticket</span>
        <IconArrowRight />
      </SC.NavButton>
    </SC.Navigator>
  );
};

export default Navigator;
