/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ft_split.c                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: epines-s <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/03/10 16:36:13 by epines-s          #+#    #+#             */
/*   Updated: 2020/03/20 13:06:26 by epines-s         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "libft.h"

static int	count_words(char const *s, char c)
{
	int		x;
	int		i;

	i = 0;
	x = 1;
	while (s[i])
	{
		while (s[i] == c)
		{
			i++;
			if (s[i] != c && s[i] != '\0')
				x++;
		}
		i++;
	}
	return (x);
}

static int	count_word_len(char const *s, char c)
{
	int		i;
	int		j;

	i = 0;
	j = 1;
	if (s)
	{
		while (s[i] != c && s[i] != '\0')
		{
			j++;
			i++;
		}
	}
	return (j);
}

static char	*ft_strnew(size_t size)
{
	char	*word;

	if (!(word = (char *)malloc(sizeof(char) * size)))
		return (NULL);
	ft_bzero(word, size);
	return (word);
}

char		**ft_split(char const *s, char c)
{
	int		i;
	int		k;
	int		j;
	int		words;
	char	**arr;

	if (!s)
		return (NULL);
	i = -1;
	k = 0;
	words = count_words(s, c);
	if (!(arr = (char **)malloc(sizeof(char *) * words)))
		return (NULL);
	while (++i < words - 1)
	{
		j = 0;
		while (s[k] == c)
			k++;
		arr[i] = ft_strnew(count_word_len(s, c));
		while (s[k] != c)
			arr[i][j++] = s[k++];
	}
	arr[i] = NULL;
	return (arr);
}
