import { Colors, TDividerProps } from '@repo/design-token';
import styled from '@emotion/styled';

interface IDividerProps {
  type: TDividerProps;
}

const Divider = ({ type = 'Thin' }: IDividerProps) => {
  return <DividerWrapper type={type} />;
};

const DividerWrapper = styled.div<IDividerProps>`
  width: 100%;
  height: ${({ type }) => (type === 'Thin' ? '1px' : type === 'Thinner' ? '0.5px' : '8px')};
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  background: ${({ type }) => (type === 'Thin' || type === 'Thinner' ? Colors.Opacity_Black : Colors.Gray500)};
`;

export default Divider;
