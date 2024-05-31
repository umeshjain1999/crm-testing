import { useShow,useOne,useResource,useNavigation } from "@refinedev/core";
import { Show, TextField, NumberField, MarkdownField } from "@refinedev/chakra-ui";

import { Heading } from "@chakra-ui/react";

export default function BlogPostShow() {
    const { edit, list } = useNavigation();
    const { id } = useResource();
    const { queryResult } = useShow({});
    const { data,isLoading } = queryResult;
  
    const record = data?.data;

  return (
      <Show isLoading={isLoading} resource="fake_data/show/:id">
          <Heading as="h5" size="sm">
              Id
          </Heading>
          <TextField value={record?.id} />
          <Heading as="h5" size="sm" mt={4}>
            Title
          </Heading>
          <TextField value={record?.first_name} />
          <Heading as="h5" size="sm" mt={4}>
            Content
          </Heading>
          <MarkdownField value={record?.last_name} />
          <Heading as="h5" size="sm" mt={4}>
            Status
          </Heading>
          <TextField value={record?.address} />
          <Heading as="h5" size="sm" mt={4}>
          Created at
          </Heading>
          <TextField value={new Date(record?.created_at).toLocaleString(undefined, {
              timeZone: "UTC",
            })} />
      </Show>
  );
};