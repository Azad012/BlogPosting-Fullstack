package jwtSecurity.example.jwtDemo.Controller;

import jwtSecurity.example.jwtDemo.Model.Post;
import jwtSecurity.example.jwtDemo.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api")
public class PostController {

    @Autowired
    private PostService postService;

    @GetMapping("/posts")

    public ResponseEntity<?> getAllPosts(){
        return ResponseEntity.ok(postService.getAllPosts());
    }
    @GetMapping("/post/{id}")
    public ResponseEntity<?> getPostById(@PathVariable Long id){
        return ResponseEntity.ok(postService.getPostById(id));
    }
     @DeleteMapping("/post/{id}")
    public ResponseEntity<?> deletePost(@PathVariable Long id ){
        postService.deletePost(id);
        return ResponseEntity.ok("post deleted");
    }
    @PostMapping("/post")
    public ResponseEntity<?> savePost(@RequestBody Post post){

        postService.savePost(post);
        return ResponseEntity.ok("post saved");
    }


}
