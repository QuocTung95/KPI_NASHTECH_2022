import React from 'react'
import { Skeleton as OriginalSkeleton } from 'antd';
import { SkeletonTitleProps } from 'antd/lib/skeleton/Title';
import { SkeletonParagraphProps } from 'antd/lib/skeleton/Paragraph';

interface SkeltonProps<RecordType> {
  randomWidthPercentParagraph?: Array<number>;
  title?: SkeletonTitleProps;
  paragraph?: SkeletonParagraphProps;
  rowsParagraph?: number;
}

const getRandom = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export default function BaseSkeleton(props: SkeltonProps<any>): JSX.Element {
  const {
    randomWidthPercentParagraph,
    title = false,
    paragraph,
    rowsParagraph = 1,
  } = props;

  return (
    <OriginalSkeleton
      active
      title={title}
      paragraph={{
        ...paragraph,
        ...(randomWidthPercentParagraph && {
          width: `${getRandom(
            randomWidthPercentParagraph[0],
            randomWidthPercentParagraph[1],
          )}%`,
        }),
        rows: rowsParagraph,
      }}
      {...props}
    />
  );
}
