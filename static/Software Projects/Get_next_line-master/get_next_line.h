/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   get_next_line.h                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: epines-s <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/02/22 13:15:31 by epines-s          #+#    #+#             */
/*   Updated: 2020/03/03 19:37:09 by epines-s         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#ifndef GET_NEXT_LINE_H
# define GET_NEXT_LINE_H

# include <unistd.h>
# include <stdio.h>
# include <string.h>
# include <stdlib.h>

# define BUFF_SIZE 10

int		get_next_line(const int fd, char **line);
int		ft_strlen(const char *s);
char	*store_the_rest(char *storage_fd);
char	*line_to_read(char *storage_fd);
char	*ft_strchr(const char *s, int c);
char	*ft_strcat(char *dst, const char *src);
char	*ft_strncpy(char *dst, const char *src, size_t n);
char	*ft_strjoin(char const *s1, char const *s2);
char	*ft_substr(char const *s, unsigned int start, size_t len);
void	*ft_memalloc(size_t size);

#endif
