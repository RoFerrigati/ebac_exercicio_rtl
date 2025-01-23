import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const Post = () => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [tempComment, setTempComment] = useState('');
<<<<<<< HEAD

=======
    
>>>>>>> 8bd4c13 (testing library)
    function handleAddComment(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const newComment = new Comment(comments.length, tempComment);
        setTempComment('');
        setComments([...comments, newComment]);
    }

    return (
        <div>
<<<<<<< HEAD
            <ul className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p className={styles['post-comment-content']}>
=======
            <ul  className={styles['post-comments']}>
                {comments.map(({ comment, id }) => (
                    <li className={styles['post-comment']} key={id}>
                        <p  className={styles['post-comment-content']}>
>>>>>>> 8bd4c13 (testing library)
                            {comment}
                        </p>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
<<<<<<< HEAD
                <textarea value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button type="submit" className={styles['post-comments-form-button']}>
=======
                <textarea data-testid="textArea" value={tempComment} onChange={e => setTempComment(e.target.value)} required className={styles['post-comments-form-textarea']} />
                <button data-testid="btn-comentario" type="submit" className={styles['post-comments-form-button']}>
>>>>>>> 8bd4c13 (testing library)
                    Comentar
                </button>
            </form>
        </div>
    );
}

export default Post;