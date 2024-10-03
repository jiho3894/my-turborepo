import styled from '@emotion/styled';
import { Meta } from '@storybook/react';
import Divider from '.';

const meta: Meta<typeof Divider> = {
  title: 'TTDS/Basic/Divider',
  component: Divider,
};

export default meta;

export const Variant = () => {
  return (
    <>
      <span>Divider : Thin</span>
      <Container>
        <Divider type="Thin" />
      </Container>
      <span>Divider : Thickest</span>
      <Container>
        <Divider type="Thickest" />
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
