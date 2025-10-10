# 100m

A todo api

## Routes

- `GET /tasks`: Fetch all the tasks in json
- `POST /tasks`: Post a new task and get back the full object with id of the new post
- `DELETE /tasks/:id`: Delete a specific task by its id and get back the new todos length
- `PATCH /tasks/:id`: Update a given task by it's id and the new content. Get back the task back with new id and content

## Docs

todo schema

```
{
    id: uuid_string,
    content: string,
    createdAt: Date,
    completed: Boolean,
    priority: ['low', 'medium', 'high']
}
```
