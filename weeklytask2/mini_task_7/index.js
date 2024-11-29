const fastify = require("fastify")({
    logger: true,
});

const port = 8080;

// Deklarasi sebuah route
fastify.get("/",(request, reply) => {
    reply.text("text/html").send("<h1>halaman utama</h1>");
});

fastify.get("/profile", (request, reply) => {
    reply.text("text/html").send("<h1>halaman profil</h1>");
});

// run
console.log(`listen port: ${port}`)
fastify.listen({ port: port}, (err) => {
    if (err) console.log(err)
})
