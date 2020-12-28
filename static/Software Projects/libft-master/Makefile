NAME = libft.a

HEADER = libft.h

BONUSHEADER = libft_bonus.h

FLAGS = -Wall -Wextra -Werror -g

SRCS = 	ft_atoi.c 			\
 		ft_bzero.c 			\
 		ft_isalnum.c 		\
 		ft_isalpha.c 		\
 		ft_isascii.c 		\
 		ft_isdigit.c 		\
 		ft_isprint.c 		\
 		ft_calloc.c 		\
 		ft_memccpy.c 		\
 		ft_memchr.c 		\
 		ft_memcmp.c 		\
 		ft_memcpy.c 		\
 		ft_memmove.c 		\
 		ft_memset.c 		\
  		ft_putchar_fd.c 	\
 		ft_putendl_fd.c 	\
  		ft_putnbr_fd.c 		\
  		ft_putstr_fd.c 		\
 		ft_strchr.c 		\
 		ft_strdup.c 		\
 		ft_strjoin.c 		\
 		ft_strlcat.c 		\
		ft_strlcpy.c		\
 		ft_strlen.c 		\
 		ft_strmapi.c 		\
 		ft_strncmp.c 		\
		ft_strnstr.c 		\
 		ft_strrchr.c 		\
  		ft_substr.c 		\
		ft_tolower.c 		\
 		ft_toupper.c 		\
		ft_itoa.c		\
		ft_split.c		\
		ft_strtrim.c		\
		ft_lstnew.c		\
		ft_lstadd_back.c	\
		ft_lstadd_front.c	\
		ft_lstclear.c		\
		ft_lstdelone.c		\
		ft_lstiter.c		\
		ft_lstlast.c		\
		ft_lstmap.c		\
		ft_lstsize.c				

BONUSSRCS =  ft_isupper_bonus.c	\
			 ft_islower_bonus.c	\
			 ft_putchar_bonus.c	\
			 ft_putstr_bonus.c	\
			 ft_putendl_bonus.c	\
			 ft_putnbr_bonus.c	\
			 ft_strstr_bonus.c	\
			 ft_strcpy_bonus.c	\
			 ft_abs_bonus.c		\
			 ft_pow_bonus.c		\
			 ft_isspace_bonus.c	\
			 ft_strcat_bonus.c	 

OBJS = $(SRCS:.c=.o)
	
BONUSOBJS = $(BONUSSRCS:.c=.o)

all: $(NAME)

$(NAME):
		gcc -c $(FLAGS) -I $(HEADER) $(SRCS)
		ar rc $(NAME) $(OBJS)
		ranlib $(NAME)
bonus: 
		gcc -c $(FLAGS) -I $(BONUSHEADER) $(BONUSSRCS)
		ar rc $(NAME) $(BONUSOBJS)
		ranlib $(NAME)

clean:
		/bin/rm -f $(OBJS) $(BONUSOBJS)

fclean: clean
		/bin/rm -f $(NAME)

re: fclean all
