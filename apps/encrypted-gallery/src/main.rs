mod static_file;

use std::net::SocketAddr;

use axum::{routing::Router, Server};

use static_file::static_handler;

#[tokio::main]
async fn main() {
    let app = Router::new().fallback(static_handler);
    let addr = SocketAddr::from(([0, 0, 0, 0], 8080));

    println!("Listening on {}", addr);

    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}