import React from 'react';
import ContentLoader, {Rect, Circle} from 'react-content-loader/native';

const LoaderSkeletonAddress: React.FC<any> = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={'200'}
      height={'40'}
      viewBox="0 0 200 40"
      backgroundColor="#e9e7e7"
      foregroundColor="#ecebeb"
      {...props}>
      <Circle x="0" cx="15" cy="15" r="10" />
      <Rect x="35" y="0" rx="5" ry="5" width="50" height="10" />
      <Rect x="35" y="15" rx="10" ry="10" width="150" height="15" />
    </ContentLoader>
  );
};

export default LoaderSkeletonAddress;
