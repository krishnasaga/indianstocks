import React from "react";
import { Box, Grid, Input, Text, Button, Slider, Radio } from "theme-ui";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";

export const TextFields = ({ fields }) => {
  return (
    <Box>
      {fields.map(() => {
        return (
          <Box p={1}>
            <Text>Hello</Text>
            <Input />
          </Box>
        );
      })}
    </Box>
  );
};

export const MediaFields = ({ fields }) => {
  return (
    <Box>
      {fields.map(() => {
        return (
          <Box p={1}>
            <Text>Hello</Text>
            <Box
              sx={{
                overflowX: "auto"
              }}
            >
              <ImagePicker
                images={[
                  "https://images.pexels.com/photos/7596924/pexels-photo-7596924.jpeg?cs=srgb&dl=pexels-kelian-pfleger-7596924.jpg&fm=jpg",
                  "https://images.pexels.com/photos/1091429/pexels-photo-1091429.jpeg?cs=srgb&dl=pexels-artem-saranin-1091429.jpg&fm=jpg",
                  "https://images.pexels.com/photos/7596924/pexels-photo-7596924.jpeg?cs=srgb&dl=pexels-kelian-pfleger-7596924.jpg&fm=jpg",
                  "https://images.pexels.com/photos/1091429/pexels-photo-1091429.jpeg?cs=srgb&dl=pexels-artem-saranin-1091429.jpg&fm=jpg"
                ].map((image, i) => ({ src: image, value: i }))}
                onPick={() => {}}
              />
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export const KnobFields = ({ fields }) => {
  return (
    <Box>
      {fields.map((field) => {
        const { label } = field;

        return (
          <Box p={1}>
            <Text>{label}</Text>
            <Slider type={"range"} />
          </Box>
        );
      })}
    </Box>
  );
};

export const SwitchFields = ({ fields }) => {
  return (
    <Box>
      {fields.map((field) => {
        const { label, options = [] } = field;
        return (
          <Box p={1}>
            <Text>{label}</Text>
            <Grid columns={options.length}>
              {options.map((option) => {
                const { label } = option;
                return (
                  <Box
                    as={"span"}
                    sx={{
                      display: "inline"
                    }}
                  >
                    <Text>{label}</Text>
                    <Radio name={""} />
                  </Box>
                );
              })}
            </Grid>
          </Box>
        );
      })}
    </Box>
  );
};

export default function App({
  texts = [1, 2],
  media = [1],
  knobs = [1, 2],
  switches = [1, 2, 3, 4]
}) {
  return (
    <Box>
      <Box>
        <TextFields fields={texts} />
      </Box>
      <Box>
        <MediaFields fields={media} />
      </Box>
      <Box>
        <KnobFields
          fields={[
            {
              label: "Initial results"
            }
          ]}
        />
      </Box>
      <Box>
        <SwitchFields
          fields={[
            {
              label: "Type",
              options: [
                {
                  label: "Crypto"
                },
                {
                  label: "Stocks"
                }
              ]
            }
          ]}
        />
      </Box>
    </Box>
  );
}
