package com.devsuperior.dsmovie.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "tb_score")
public class Score {

    @EmbeddedId
    private ScorePK id = new ScorePK();

    private Double scoreValue;

    public Score() {
    }

    public Score(Movie movie, User user, Double value) {
        id.setMovie(movie);
        id.setUser(user);
        this.scoreValue = value;
    }

    public Movie getMovie() {
        return id.getMovie();
    }

    public void setMovie(Movie movie) {
        id.setMovie(movie);
    }

    public User getUser() {
        return id.getUser();
    }

    public void setUser(User user) {
        id.setUser(user);
    }

    public Double getValue() {
        return scoreValue;
    }

    public void setValue(Double value) {
        this.scoreValue = value;
    }
}
