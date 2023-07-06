interface Props {
  str: string;
}

export const ProjectDetailItem: React.FC<Props> = ({ str }: any) => {
  return (
    <div>
      <span className="text-zinc-700 text-justify">{str}</span>
    </div>
  );
};
