import React from "react";

export default function Form() {
  return (
    <div>
      <form action="mailto:kkureli@gmail.com" method="post">
        <div class="card border-dark     rounded-3">
          <div class="card-header p-0">
            <div class="bg-dark text-white text-center py-2">
              <h3>
                <i class="fa fa-envelope"></i> Contact
              </h3>
            </div>
          </div>
          <div class="card-body p-3"></div>
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-user text-info"></i>
                </div>
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                name="name"
                placeholder="Name Surname"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-envelope text-info"></i>
                </div>
              </div>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="name@gmail.com"
                required
              />
            </div>
          </div>

          <div class="form-group">
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fa fa-comment text-info"></i>
                </div>
              </div>
              <textarea
                class="form-control"
                placeholder="Message"
                required
              ></textarea>
            </div>
          </div>
          <div class="text-center">
            <input
              type="submit"
              value="Submit"
              class="btn btn-dark btn-block rounded-0 py-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
