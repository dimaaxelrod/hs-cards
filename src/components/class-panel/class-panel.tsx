import { FormControlLabel, Typography, Radio, Loader } from "@zerto/shared-fe";
import { useActions } from "../../hooks/actions";
import { useGetClassesQuery } from "../../store/hearthstone/hs.api";
import { Container, CustomRadioGroup } from "./styles";

export const ClassPanel = () => {
  const { isLoading, data } = useGetClassesQuery();
  const {chooseClass} = useActions()

  return (
    <Container>
      <Typography zVariant="widget-big">Please choose the class</Typography>
      {isLoading && <Loader />}
      <CustomRadioGroup defaultValue="female" name="radio-buttons-group">
        {data?.map((className: string) => (
          <FormControlLabel
            key={className}
            onClick={() => chooseClass(className)}
            value={className}
            control={<Radio />}
            label={className}
          />
        ))}
      </CustomRadioGroup>
    </Container>
  );
};
