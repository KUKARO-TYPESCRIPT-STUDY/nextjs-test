import {StyledButton} from "@/app/component/StyledButton";

export default {
  title: 'Button',
  component: StyledButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export const Primary = (props: any) => <StyledButton {...props} variant="primary">
  Primary
</StyledButton>;

export const Success = (props: any) => <StyledButton {...props} variant="success">
  Success
</StyledButton>;

export const Transparent = (props: any) => <StyledButton {...props} variant="transparent">
  Transparent
</StyledButton>;