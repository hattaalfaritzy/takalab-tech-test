import React from 'react';
import ContentLoader, {Rect} from 'react-content-loader/native';

const LoaderSkeleton: React.FC<any> = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={'200'}
      height={'25'}
      viewBox="0 0 200 25"
      backgroundColor="#e9e7e7"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="0" y="10" rx="10" ry="10" width="200" height="15" />
    </ContentLoader>
  );
};

export default LoaderSkeleton;
