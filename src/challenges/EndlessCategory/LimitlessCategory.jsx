import Category from './Category';

const LimitlessCategory = ({ menu }) => {
  return menu?.map((item, i) => <Category item={item} key={i} />);
};

export default LimitlessCategory;
