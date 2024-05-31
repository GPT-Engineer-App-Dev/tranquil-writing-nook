import { useState } from "react";
import { Container, Heading, VStack, Select, Button, useToast } from "@chakra-ui/react";

const DeletePost = () => {
  const [selectedPost, setSelectedPost] = useState("");
  const toast = useToast();

  const handleDelete = () => {
    if (selectedPost) {
      // Here you would typically send the delete request to a server
      console.log("Deleted Post:", selectedPost);
      toast({
        title: "Post deleted.",
        description: "The blog post has been deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setSelectedPost("");
    } else {
      toast({
        title: "Error.",
        description: "You must select a post to delete.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Delete Post</Heading>
        <Select
          placeholder="Select post to delete"
          value={selectedPost}
          onChange={(e) => setSelectedPost(e.target.value)}
        >
          {/* Options would be dynamically generated from the list of posts */}
          <option value="post1">Post 1</option>
          <option value="post2">Post 2</option>
          <option value="post3">Post 3</option>
        </Select>
        <Button colorScheme="red" onClick={handleDelete}>Delete</Button>
      </VStack>
    </Container>
  );
};

export default DeletePost;