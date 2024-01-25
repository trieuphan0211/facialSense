import PropTypes from "prop-types";

export const Transfrom = ({ ischeck,thetitleStrong,titleStrong1,titlenormal1,title, titlenormal,subtitle1, effect, workfor, subtitle2, biomatriciden, checkid, subtitle3, userinf, around,  showAdditionalParagraph}) => {

  return (
    <div className="max-w-[1300px] py-[50px] mx-auto relative">
      <div className="ml-[10px]">
        <h1 className="text-5xl text-[#1C2045] font-extrabold max-w-[1110px] leading-[60px]">
          <span className="inline-block border-b-[10px] h-[51px] border-[var(--tree-poppy)]">
            {title}
          </span>
          {titlenormal}
        </h1>
        <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
        {ischeck && (
          <strong>{thetitleStrong}</strong>
        )}
          {subtitle1} <strong>{effect}</strong> {workfor}
        </p>
        <p className="text-[#3A505F] leading-[25px] text-[18px] font-montserrat mt-[15px]">
          {subtitle2} <strong>{biomatriciden}</strong> {checkid}
          {ischeck && (
          <strong>{titleStrong1}</strong> 
          )}
          {ischeck && (
            <span>{titlenormal1}</span>
          )}
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
    showAdditionalParagraph: PropTypes.bool,
    ischeck: PropTypes.bool,
    thetitleStrong: PropTypes.string,
    titlenormal1: PropTypes.string,
    titleStrong1: PropTypes.string // Ensure 'showAdditionalParagraph' is a required boolean prop
  };
