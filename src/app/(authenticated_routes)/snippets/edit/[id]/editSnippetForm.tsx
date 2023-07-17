import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid } from "@mui/material";
import { Controller, FormContainer } from "react-hook-form-mui";
import { UpdateSnippet, UpdateSnippetSchema } from "@/data/snippet";
import { javascript } from "@codemirror/lang-javascript";
import CodeMirror from "@uiw/react-codemirror";
import { Snippet } from "@/util/types";

export type CreateSnippetFormProps = {
  snippet: Snippet;
  onUpdate: (updateSnippet: UpdateSnippet) => void;
  onCancel: () => void;
};

export const EditSnippetForm: FC<CreateSnippetFormProps> = ({
  snippet,
  onUpdate,
  onCancel,
}) => {
  console.log("snippet: ", snippet);

  return (
    <FormContainer
      resolver={zodResolver(UpdateSnippetSchema)}
      onSuccess={onUpdate}
      onError={(errors) => console.log(errors)}
      // @ts-ignore
      defaultValues={snippet}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="code"
            render={({ field }) => {
              console.log(field);
              return (
                <CodeMirror
                  value={field.value}
                  onChange={field.onChange}
                  height="500px"
                  width="100%"
                  extensions={[javascript({ typescript: true, jsx: false })]}
                />
              );
            }}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 3, ml: 1 }} onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
          Update
        </Button>
      </Box>
    </FormContainer>
  );
};
