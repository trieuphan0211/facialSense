import PropTypes from "prop-types";

export const Transfrom = ({ title, titlenormal,subtitle1, effect, workfor, subtitle2, biomatriciden, checkid, subtitle3, userinf, around,  showAdditionalParagraph}) => {

  return (
    <div className="max-w-[1300px] py-[100px] mx-auto relative">
      <div className="ml-[10px]">
        <h1 className="text-5xl text-[#1C2045] font-extrabold">
          <span className="inline-block border-b-[10px] h-11 border-[var(--tree-poppy)]">
            {title}
          </span>
          {titlenormal}
        </h1>
        <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
          {subtitle1} <strong>{effect}</strong> {workfor}
        </p>
        <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
          {subtitle2} <strong>{biomatriciden}</strong> {checkid}
        </p>
        <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
          {subtitle3} <strong>{userinf}</strong> {around}
        </p>
        {showAdditionalParagraph && (
          <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
            Additional content when showAdditionalParagraph is true
          </p>
        )}
      </div>
    </div>
  );
};
Transfrom.propTypes = {
    title: PropTypes.string,
    subtitle1: PropTypes.string,
    titlenormal: PropTypes.string,
    effect: PropTypes.string,
    workfor: PropTypes.string,
    subtitle2: PropTypes.string, 
    biomatriciden: PropTypes.string, 
    checkid: PropTypes.string, 
    subtitle3: PropTypes.string, 
    userinf: PropTypes.string,  // Ensure 'title' is a required string prop // Ensure 'title' is a required string prop
    around: PropTypes.string,  // Ensure 'title' is a required string prop // Ensure 'title' is a required string prop
    // Ensure 'title' is a required string prop // Ensure 'title' is a required string prop
    showAdditionalParagraph: PropTypes.bool, // Ensure 'showAdditionalParagraph' is a required boolean prop
  };
