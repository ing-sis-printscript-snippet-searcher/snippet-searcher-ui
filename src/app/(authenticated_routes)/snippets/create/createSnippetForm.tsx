import React, { FC } from "react";
import {
  CreateSnippet,
  CreateSnippetSchema,
  SnippetType,
} from "@/data/snippet";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, MenuItem } from "@mui/material";
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
} from "react-hook-form-mui";
import { SnippetFileField } from "@/app/(authenticated_routes)/snippets/create/snippetFileField";

const TYPE_OPTIONS = [
  {
    id: "printscript" as SnippetType,
    label: "PrintScript",
  },
];

const STATUS_OPTIONS = [
  {
    id: "pending" as SnippetType,
    label: "Pending",
  },
  {
    id: "failed" as SnippetType,
    label: "Failed",
  },
  {
    id: "not-compliant" as SnippetType,
    label: "Not Compliant",
  },
  {
    id: "compliant" as SnippetType,
    label: "Compliant",
  },
];

export type CreateSnippetFormProps = {
  onCreate: (createSnippet: CreateSnippet) => void;
  onCancel: () => void;
};

export const CreateSnippetForm: FC<CreateSnippetFormProps> = ({
  onCreate,
  onCancel,
}) => {
  return (
    <FormContainer
      resolver={zodResolver(CreateSnippetSchema)}
      onSuccess={onCreate}
      onError={(errors) => console.log(errors)}
    >
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <TextFieldElement
            required
            fullWidth
            id="snippet-name"
            name="name"
            label="Name"
            variant="outlined"
            autoComplete="snippet-name"
          />
        </Grid>
        <Grid item xs={4}>
          <SelectElement
            fullWidth
            id="snippet-type"
            name="type"
            label="Type"
            defaultValue="printscript"
            variant="outlined"
            options={TYPE_OPTIONS}
          >
            <MenuItem value="printscript">PrintScript</MenuItem>
          </SelectElement>
        </Grid>
        <Grid item xs={4}>
          <SelectElement
            fullWidth
            id="snippet-compliance"
            name="compliance"
            label="Compliance"
            defaultValue="pending"
            variant="outlined"
            options={STATUS_OPTIONS}
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="failed">Failed</MenuItem>
            <MenuItem value="not-compliant">Not Compliant</MenuItem>
            <MenuItem value="compliant">compliant</MenuItem>
          </SelectElement>
        </Grid>
        <Grid item xs={12}>
          <SnippetFileField />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button sx={{ mt: 3, ml: 1 }} onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="contained" sx={{ mt: 3, ml: 1 }} type="submit">
          Create
        </Button>
      </Box>
    </FormContainer>
  );
};
