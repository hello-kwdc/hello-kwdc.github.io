import * as SC from "@/components/styles";
import IconArrowRight from "@/resources/icons/arrowRight.svg";
const Navigator = () => {
  return (
    <SC.Navigator>
      <SC.NavLogo>KWDC23</SC.NavLogo>
      <SC.NavButton>
        <span>Get Ticket</span>
        <IconArrowRight />
      </SC.NavButton>
    </SC.Navigator>
  );
};

export default Navigator;
