package jwtSecurity.example.jwtDemo.Service;

import jwtSecurity.example.jwtDemo.Model.Post;
import jwtSecurity.example.jwtDemo.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    public List <Post> getAllPosts() {

        List<Post> posts= postRepository.findAll();
        return posts;


    }

    public Post getPostById(Long id) {
        System.out.println(id);
        Optional<Post> post = postRepository.findById(id);

        return post.orElse(null);
    }

    public void deletePost(Long id){
        postRepository.deleteById(id);
    }


    public void savePost(Post post){
         postRepository.save(post);
    }
}
