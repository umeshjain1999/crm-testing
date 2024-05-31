import {
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Textarea,
} from "@chakra-ui/react";
import { Create } from "@refinedev/chakra-ui";
import { useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export default function ProductCreate() {
  const {
      refineCore: { formLoading },
      saveButtonProps,
      register,
      formState: { errors },
  } = useForm({});

  const { options: categoryOptions } = useSelect({
    resource: "categories",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
        <FormControl mb="3" isInvalid={!!errors?.title}>
            <FormLabel>Title</FormLabel>
            <Input
                type="text"
                {...register("title", { required: "This field is required" })}
            />
            <FormErrorMessage>
                {`${errors.title?.message}`}
            </FormErrorMessage>
        </FormControl>
        <FormControl mb="3" isInvalid={!!errors?.content}>
            <FormLabel>Content</FormLabel>
            <Textarea
                          rows={5}
                          cols={33}
                          style={{ verticalAlign: "top" }}
                {...register("content", { required: "This field is required" })}
            />
            <FormErrorMessage>
                {`${errors.content?.message}`}
            </FormErrorMessage>
        </FormControl>
        <FormControl mb="3" isInvalid={!!errors?.categories}>
            <FormLabel>Content</FormLabel>
            <Select
                id="categoryId"
                {...register("categoryId", { required: "This field is required" })}
            >
                {categoryOptions?.map((option) => (
                    <option value={option.value} key={option.value}>
                    {option.label}
                    </option>
                ))}
            </Select>
            <FormErrorMessage>
                {`${errors.categories && errors.categories?.message}`}
            </FormErrorMessage>
        </FormControl>
        <FormControl mb="3" isInvalid={!!errors?.status}>
            <FormLabel>Status</FormLabel>
            <Select
                id="status"
                defaultValue="draft"
                {...register("status", { required: "This field is required" })}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="rejected">Rejected</option>
            </Select>
            <FormErrorMessage>
                {`${errors.status && errors.status?.message}`}
            </FormErrorMessage>
        </FormControl>
    </Create>
  );
};